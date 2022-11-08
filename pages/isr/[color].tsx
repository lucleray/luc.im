function Blog({ color, now }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        background: color,
      }}
    >
      Generated at {now}
    </div>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: { now: Date.now(), color: params.color },
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { color: 'blue' } },
      { params: { color: 'yellow' } },
      { params: { color: 'green' } },
      { params: { color: 'purple' } },
      { params: { color: 'black' } },
      { params: { color: 'white' } },
    ],
    fallback: 'blocking',
  }
}

export default Blog
