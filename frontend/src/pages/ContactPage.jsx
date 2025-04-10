import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    background: #111827;

    h2 {
      font-size: 2.5rem;
      color: #333; /* Keep heading color as it was */
      margin-bottom: 2rem;
      text-align: center;
      font-weight: bold;
    }

    .container {
      max-width: 40rem;
      width: 100%;
      background: #fff;
      padding: 2.5rem 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      .contact-form {
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input,
          textarea {
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
            color: #333; /* Ensure text inside inputs is visible */
            background-color: #f9fafb; /* Light gray background */
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
            transition: all 0.3s ease;

            &::placeholder {
              color: #aaa; /* Placeholder text color */
            }

            &:focus {
              border-color: #007bff;
              box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            }
          }

          textarea {
            resize: none;
            height: 150px;
          }

          input[type="submit"] {
            background: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: bold;
            transition: all 0.3s ease;

            &:hover {
              background: #0056b3;
              transform: scale(1.05);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkryarr"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              required
              autoComplete="off"
              placeholder="Write your message here"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
