export default function Fieldset() {
    return (
        <fieldset className='language-fieldset'>
              <legend className='language-legend'>Select a language to translate to:</legend>
              <label>
                <input 
                  className='language-radio'
                  type='radio' 
                  name='language' 
                  id='french'
                  value='french'
                  required
                />
                French
              </label>
              <label> 
                <input 
                  className='language-radio'
                  type='radio' 
                  name='language' 
                  id='italian'
                  value='italian'
                  required
                />
                Italian
              </label>
              <label>
                <input 
                  className='language-radio'
                  type='radio' 
                  name='language' 
                  id='spanish'
                  value='spanish'
                  required
                />
                Spanish 
              </label>
            </fieldset>
    )
}