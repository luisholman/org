import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/' target="_blank">
                <img src="/img/facebook.svg" width="50rem"  alt='Facebook' />
            </a>
            <a href='https://outlook.live.com/mail/0/' target="_blank">
                <img src="/img/email.svg" width="50rem" alt='correo' />
            </a>
            <a href='https://www.instagram.com/' target="_blank">
                <img src="/img/instagram.svg" width="50rem" alt='instagram' />
            </a>
            <a href='https://github.com/luisholman/' target="_blank">
                <img src="/img/github.svg" width="50rem" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <p>Desarrollado por<strong> Luis Holman </strong></p>
        
    </footer>
}

export default Footer