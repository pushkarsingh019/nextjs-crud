import NewNote from "../components/NewNote";
import axios from "axios";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { useRouter } from "next/router";
import connectDB from "../config/database";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/get-posts");
  const data = await res.json();
  const posts = data.data;
  return {
    props: {
      posts,
    },

    revalidate: 1,
  };
}

function Home({ posts }) {
  const router = useRouter();

  return (
    <>
      <NewNote />
      {posts.map((post) => {
        return <NoteCard key={post._id} title={post.title} data={post.data} id={post._id} />
      })}
    </>
  );
}

export default Home;
