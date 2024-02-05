import React, { useState } from "react";

import Navbar from "../components/Navbar";
import blog1 from "../graphics/blog-1.jpg";
import blog2 from "../graphics/blog-2.jpg";
import blog3 from "../graphics/blog-3.jpg";
import blog4 from "../graphics/blog-4.jpg";

import FilterListIcon from "@mui/icons-material/FilterList";

import {
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const Blog = () => {
  const existingBlogs = [
    {
      id: 1,
      title: "Making a Difference: Volunteering in Your Local Community",
      content:
        "In this blog post, we explore the impact of volunteering within your local community. Discover how small acts of kindness and dedicated volunteer work can make a significant difference in the lives of others. From organizing community events to supporting local charities, find inspiration and learn about the fulfilling experiences that come with giving back.",
      image: blog1,
    },
    {
      id: 2,
      title: "Empowering Youth Through Volunteerism",
      content:
        "This blog delves into the power of involving young people in volunteer activities. Explore the various ways in which volunteering can positively influence the personal development of youth, providing them with valuable skills, fostering a sense of responsibility, and building a foundation for a lifetime of community engagement. Join us as we discuss the transformative impact of empowering the next generation through volunteerism.",
      image: blog2,
    },
    {
      id: 3,
      title: "Environmental Stewardship: Volunteering for a Greener Tomorrow",
      content:
        "Dive into the world of environmental volunteering and learn how individuals can contribute to a sustainable future. From tree planting initiatives to beach cleanups, discover the various ways you can actively participate in environmental stewardship. Explore the rewards of connecting with nature and making a positive impact on the planet through volunteer efforts.",
      image: blog3,
    },
    {
      id: 4,
      title: "Virtual Volunteering: Making a Global Impact from Anywhere",
      content:
        "This blog explores the concept of virtual volunteering, showcasing how individuals can contribute to causes worldwide without leaving their homes. Discover online platforms and initiatives that allow you to volunteer your time, skills, and expertise remotely. Explore the opportunities for creating positive change in diverse communities, all from the comfort of your own space.",
      image: blog4,
    },
  ];

  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");

  const handleCreateBlog = () => {
    // Implement logic to save the new blog
    console.log("New Blog Title:", newBlogTitle);
    console.log("New Blog Content:", newBlogContent);

    // Reset form fields
    setNewBlogTitle("");
    setNewBlogContent("");
  };

  return (
    <>
      <Navbar />
      <Box padding="64px" bgcolor="#FEE9E0">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Blog
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Recent Blogs
          </Typography>
          <FilterListIcon />
        </Stack>
        <List>
          <Stack direction="row">
            {existingBlogs.map((blog) => (
              <ListItem key={blog.id}>
                <Card sx={{ width: 300, height: 530 }}>
                  <CardContent>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ maxWidth: "100%", marginBottom: "16px" }}
                    />
                    <ListItemText
                      primary={blog.title}
                      secondary={blog.content}
                    />
                    <Button variant="text" onClick={handleCreateBlog}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </Stack>
        </List>
        <Typography variant="h6" gutterBottom>
          Write a New Blog
        </Typography>
        <Card>
          <CardContent>
            <TextField
              label="Blog Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />
            <TextField
              label="Blog Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "#CD3301", "&:hover": { bgcolor: "#992200" } }}
              onClick={handleCreateBlog}
            >
              Create Blog
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Blog;
