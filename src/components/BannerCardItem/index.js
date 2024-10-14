import React, {useState, useEffect} from 'react'
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails, onAnswerSelect} = props
  const {
    Question,
    Option1,
    Option2,
    Option3,
    Option4,
    className,
  } = bannerDetails
  const [selectedOption, setSelectedOption] = useState('')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  // Reset the selected option and feedback message when the question changes
  useEffect(() => {
    setSelectedOption('') // Reset select value when a new question is loaded
    setFeedbackMessage('') // Clear feedback message when moving to the next question
  }, [bannerDetails])

  const handleSubmit = () => {
    if (selectedOption) {
      const feedback = onAnswerSelect(selectedOption)
      setFeedbackMessage(feedback)
    }
  }

  return (
    <>
      <li className={`${className} banner-card-item`}>
        <div className="question-container">
          <h1 className="heading">{Question}</h1>
          <select
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value={Option1}>{Option1}</option>
            <option value={Option2}>{Option2}</option>
            <option value={Option3}>{Option3}</option>
            <option value={Option4}>{Option4}</option>
          </select>
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </li>
      <div>
        {feedbackMessage && (
          <div className="feedback-message">{feedbackMessage}</div>
        )}
      </div>
    </>
  )
}

export default BannerCardItem
