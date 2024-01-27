import React, { useState } from 'react';

const Form = () => {
  const [json, setJson] = useState({
    'rules': [],
    'combinator': 'AND'
  });

  const [combinator, setCombinator] = useState('AND');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRule = {
      'key': document.getElementById('ruletype').value,
      'output': {
        'value': parseInt(document.getElementById('value').value),
        'operator': document.getElementById('expression').value,
        'score': parseInt(document.getElementById('score').value),
      },
    };

    setJson(prevJson => ({
      ...prevJson,
      rules: [...prevJson.rules, newRule],
      combinator
  }));
  }

  const handleCombinator = () => {
    setCombinator(combinator === 'OR' ? 'AND' : 'OR');
  }

  const handleDeleteRule = () => {
  setJson(prevJson => {
    const newRules = [...prevJson.rules.slice(0, -1)];
    return { ...prevJson, rules: newRules };
  });
};

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
              <div className='col'>
                <select className='form-select' onChange={handleCombinator}>
                  <option value='and'>AND</option>
                  <option value='or'>OR</option>
                </select>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-3'>
                <select
                  id='ruletype'
                  className='form-select'
                >
                  <option value='age'>Age</option>
                  <option value='credit_score'>Credit Score</option>
                  <option value='account_balance'>Account Balance</option>
                  
                </select>
              </div>
              <div className='col-3'>
                <select
                  id='expression'
                  className='form-select'
                >
                  <option value='>'>{'> '}</option>
                  <option value='>='>{'>='}</option>
                  <option value='<'>{'<'}</option>
                  <option value='<='>{'<='}</option>
                  <option value='='>{'='}</option>
                </select>
              </div>
              <div className='col-3'>
                <input className='form-control' id='value' type='number' placeholder='Value' />
              </div>
              <div className='col-3'>
                <input className='form-control' id='score' type='number' placeholder='Score' />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Rule
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteRule}
            >
              Delete Rule
            </button>
          </form>
        </div>
        <div className='col-6'>
          <pre>{ JSON.stringify(json, null, 2) }</pre>
        </div>
      </div>
    </div>
  );
}

export default Form;
