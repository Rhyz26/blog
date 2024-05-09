import React from 'react'
import { Card, Image, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';;

import { Carousel } from '@mantine/carousel';



const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];


function Home() {
  
  
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));


  return (
    
    <MantineProvider>

    <div>
      <div className="flex gap-4 mx-auto max-w-[80%] mt-20">

      <Card
      shadow="sm"
      padding="xl"
      component="a"
      // href=""
      // target="_blank"
      >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={400}
          w={600}
          alt="No way!"
          className='rounded-lg'
          />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>

    <Card
      shadow="sm"
      padding="xl"
      component="a"
      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      // target="_blank"
      >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={400}
          w={600}
          alt="No way!"
          className='rounded-lg'
          />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
          </div>



<div className="flex gap-4 mx-auto max-w-[80%] mt-8 mb-5">


    <Card
      shadow="sm"
      padding="xl"
      component="a"
      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      // target="_blank"
      >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={400}
          w={600}
          alt="No way!"
          className='rounded-lg'
          />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>


    <Card
      shadow="sm"
      padding="xl"
      component="a"
      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      // target="_blank"
      >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={400}
          w={600}
          alt="No way!"
          className='rounded-lg'
          />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>

          </div>



<Carousel withIndicators>{slides}</Carousel>



    </div>
      </MantineProvider>
  )
}

export default Home;


