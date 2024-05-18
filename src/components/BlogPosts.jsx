import React from "react";
import { Card, Image, MantineProvider, Text } from "@mantine/core";

const BlogPosts = ({
  blogTitle,
  blogContent,
  blogDesc,
  authorName,
  coverImg,
}) => {
  return (
    <div className="mt-28 mx-auto max-w-[80%]">
      <MantineProvider>
        <Card
          shadow="xl"
          padding="xl"
          className="border rounded-2xl"
          // component="a"
          // href=""
          // target="_blank"
        >
          <Card.Section>
            <Image
              src={coverImg}
              className="mb-4 rounded-md w-full h-40 object-cover "
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md" className="text-3xl font-bold text-white">
            {blogTitle}
          </Text>
          <Text mt="xs" c="dimmed" size="sm" className="italic font-bold text-lg text-white">
            {blogDesc}
          </Text>
          <Text mt="xs" c="dimmed" size="sm" className="text-xl text-white">
            {blogContent}
          </Text>

          <Text mt="xs" c="dimmed" size="sm" className="text-lg">
            {authorName}
          </Text>
        </Card>
      </MantineProvider>
    </div>
  );
};

export default BlogPosts;
