const SupportOptionSingle = ({ title, textContent, ctaText }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{textContent}</p>
      <button className='cursor-pointer'>{ctaText}</button>
    </div>
  )
}

export default SupportOptionSingle;