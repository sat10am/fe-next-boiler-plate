import Button from '@/components/Button'
import styled from '@emotion/styled'

export default function AboutPage() {
  return (
    <div>
      <main>
        <Title>About Page</Title>
        <Button onClick={() => {console.log('clicked')}}/>
      </main>
    </div>
  )
};


const Title = styled.h1`
  color: tomato;
  font-size: 42px;
`;



