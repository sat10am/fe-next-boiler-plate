import Button from '@/components/Button'

export default function About() {
  return (
    <div>
      <main>
        about Page
        <Button onClick={() => {console.log('clicked')}}/>
      </main>
    </div>
  )
}