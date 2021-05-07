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


const Title = styled.div`
  color: tomato;
  font-size: 42px;
`;



