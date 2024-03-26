import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeProvider';

interface FormData {
  name: string;
  email: string;
  number: string;
  address: string;
  message: string;
}

const ContactForm = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const { theme } = useTheme()


  const SubmitButton = styled.button`
width: 100%;
padding: 12px;
border: none;
border-radius: 5px;
background-color: white;
color: ${theme};
border: 3px solid ${theme};
font-size: 16px;
font-weight: bold;
cursor: pointer;
`;

  const Title = styled.h2`
  font-size: 35px;
  font-weight: lighter;
  margin-bottom: 20px;
  text-align: center;
  color: ${theme};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;


  const FormContainer = styled.form`
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 3px ${theme};
  margin: 1.25rem 0;
`;

  const api = 'https://decisive-balance-1f853ee862.strapiapp.com/api/contacts';

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      });
      if (response.ok) {
        console.log('Data submitted successfully');
        alert('Thank you! We will be contacting you shortly!');
      } else {
        console.error('Failed to submit data');
        alert('Submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting. Please try again later.');
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)} id="form">
        <Title>Contact 👋</Title>
        <FormSection>
          <FormControl>
            <Label htmlFor="name">Your Name</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" placeholder="Name" />}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="email">Your Email</Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              render={({ field }) => <Input {...field} type="email" placeholder="Email" />}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="number">Phone Number</Label>
            <Controller
              name="number"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" placeholder="Phone Number" />}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="address">Quote Address</Label>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <Input {...field} type="text" placeholder="Address" />}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="message">Message</Label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => <TextArea {...field} placeholder="Message (Optional)" />}
            />
          </FormControl>
        </FormSection>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default ContactForm;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;


const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormControl = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  resize: vertical;
  height: 120px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;