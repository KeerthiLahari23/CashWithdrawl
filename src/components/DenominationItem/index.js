// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denoDetails, updatedOne} = props
  const {value} = denoDetails
  const onUpdate = () => {
    updatedOne(value)
  }
  return (
    <li className="list-items">
      <button type="button" className="denom-button" onClick={onUpdate}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
