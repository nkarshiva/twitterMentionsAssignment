import { useState } from 'react'
import mentionOptions from './../data.json'
import './App.css'

function App() {

  //State variables
  const [inputText, setInputText] = useState("")
  const [suggestedMentions, setSuggestedMentions] = useState([] as string[]);
  const [suggestedMention, setSuggestedMention] = useState("");

  //On text change in input field
  const onTextChange = (e: any) => {
    setSuggestedMention("")
    const text = e.target.value;
    setInputText(text)

    // Detect mentions starting with @ and return an array containing them
    const mentions = text.match(/@(\w+)/g);
    if (mentions) {

      //Getting the substring from the text excluding "@"
      const mentionUserInput = mentions.map((mention: any) => mention.substring(1));
     
      //Filter out the options to show in the dropdown based on character match
      const filteredMentions = mentionOptions.filter((mention) =>
        mention.first_name.toLowerCase().startsWith(mentionUserInput[mentionUserInput.length - 1].toLowerCase())
      );

      //Getting the list of all suggested names in array format
      const filterMentionNames = filteredMentions.map(mention => mention.first_name + " " + mention.last_name)
      setSuggestedMentions(filterMentionNames);
    } else {
      setSuggestedMentions([]);
    }
  }

  //On mention select replace text with mentioned text
  const handleMentionSelect = (mention: string) => {
    const mentionText = `@${mention}`;
    setInputText(inputText.replace(/@(\w+)/g, mentionText));
    setSuggestedMentions([]);
    setSuggestedMention(mention)
  };

  //JSX
  return (
    <>
      <div className='container'>
        <input className='textBox' placeholder='Mention' value={inputText} onChange={onTextChange} />
        <div>
          {(suggestedMentions.length > 0 && suggestedMention==="")&& (
            <ul className='suggestionBox'>
              {suggestedMentions.map((mention, index) => (
                <li key={index} className='suggestion' onClick={() => handleMentionSelect(mention)}>
                  {mention}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App
