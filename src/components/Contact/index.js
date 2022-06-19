import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>I am interested in job opportunites as a software developer.</p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  ></input>
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                    <input type='submit' className='flat-button' value='SEND'></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
