import './ClickableLogo.css'

function ClickableLogo({ picture, link }) {
  return (
    <a href={link} className='logo-container'>
      <img src={picture} alt="Logo Images" className='logo'/>
    </a>
  );
}

export default ClickableLogo;

