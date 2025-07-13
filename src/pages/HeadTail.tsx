import React, { useState } from 'react';
import { ChevronDown, Plus, AlertCircle } from 'lucide-react';

interface Column {
  id: number;
  values: string[];
}

const HeadTail: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [columns, setColumns] = useState<Column[]>([]);
  const [error, setError] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = () => {
    if (isSubmitting) return; // Prevent double submission
    
    if (!selectedValue) {
      setError('Please select value from dropdown');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // If no columns exist, create the first column
    if (columns.length === 0) {
      setColumns(prev => [
        ...prev,
        {
          id: Date.now(),
          values: [selectedValue]
        }
      ]);
    } else {
      const lastColumn = columns[columns.length - 1];
      // If the last column has the same value, add to it
      if (lastColumn.values[0] === selectedValue) {
        setColumns(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            values: [...updated[updated.length - 1].values, selectedValue]
          };
          return updated;
        });
      } else {
        // If the last column has a different value, create a new column
        setColumns(prev => [
          ...prev,
          {
            id: Date.now(),
            values: [selectedValue]
          }
        ]);
      }
    }

    // Reset dropdown
    setSelectedValue('');
    setIsDropdownOpen(false);
    
    // Reset submitting state after a brief delay
    setTimeout(() => setIsSubmitting(false), 100);
  };

  const getMaxColumnHeight = () => {
    return Math.max(...columns.map(col => col.values.length), 1);
  };

  const resetGame = () => {
    setColumns([]);
    setSelectedValue('');
    setError('');
    setIsDropdownOpen(false);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Head & Tail Game</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select H (Head) or T (Tail) and watch as dynamic columns are created based on your choices.
          Same consecutive values stack vertically, while different values create new columns.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-end mb-6">
          <div className="flex-1">
            <label htmlFor="value-select" className="block text-sm font-medium text-gray-700 mb-2">
              Choose Head or Tail
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full px-4 py-3 text-left bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  error ? 'border-red-300' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <span className={selectedValue ? 'text-gray-900' : 'text-gray-400'}>
                  {selectedValue ? (selectedValue === 'H' ? 'H - Head' : 'T - Tail') : 'Select Value'}
                </span>
                <ChevronDown className={`absolute right-3 top-3.5 w-5 h-5 text-gray-400 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <button
                    onClick={() => {
                      setSelectedValue('H');
                      setIsDropdownOpen(false);
                      setError('');
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    H - Head
                  </button>
                  <button
                    onClick={() => {
                      setSelectedValue('T');
                      setIsDropdownOpen(false);
                      setError('');
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    T - Tail
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center px-6 py-3 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
                isSubmitting 
                  ? 'bg-blue-400 text-white cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Plus className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Adding...' : 'Submit'}
            </button>
            
            {columns.length > 0 && (
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="flex items-center p-4 mb-6 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {columns.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Results</h3>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex gap-8 justify-start">
                {columns.map((column) => (
                  <div key={column.id} className="flex flex-col gap-2">
                    {column.values.map((value, index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-sm ${
                          value === 'H' 
                            ? 'bg-blue-500 hover:bg-blue-600' 
                            : 'bg-emerald-500 hover:bg-emerald-600'
                        } transition-colors`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Total selections:</strong> {columns.reduce((total, col) => total + col.values.length, 0)}
                </p>
                <p className="mb-2">
                  <strong>Columns created:</strong> {columns.length}
                </p>
                <p>
                  <strong>Pattern:</strong> {columns.map(col => `${col.values[0]}(${col.values.length})`).join(' → ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="mb-2"><strong>Same Value:</strong> Adds to the current column vertically</p>
            <p><strong>Different Value:</strong> Creates a new column to the right</p>
          </div>
          <div>
            <p className="mb-2"><strong>Blue (H):</strong> Represents Head selections</p>
            <p><strong>Green (T):</strong> Represents Tail selections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadTail;