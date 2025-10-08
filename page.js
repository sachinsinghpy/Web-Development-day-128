export default async function Page({ params }) {
  const { slug } = await params

  let languages = ["python","javascript","java","cpp","cs"]

  if (languages.includes(params.slug)){
    return <div>My post : {params.slug}</div>
  }
  else{
    return <div>Post not found</div>
  }
  return <div>My Post: {slug}</div>
}