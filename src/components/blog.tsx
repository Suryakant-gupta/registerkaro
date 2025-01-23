import Link from "next/link"

const blogPosts = [
  {
    title: "5 Key Compliance Challenges for Startups",
    excerpt:
      "Navigating the complex world of business compliance can be daunting for startups. Here are the top 5 challenges and how to overcome them.",
    image: "/placeholder.svg",
    date: "May 15, 2023",
  },
  {
    title: "The Importance of Annual Compliance",
    excerpt:
      "Staying compliant isn't just about avoiding penalties. Learn how annual compliance can benefit your business in the long run.",
    image: "/placeholder.svg",
    date: "June 2, 2023",
  },
  {
    title: "Understanding GST Registration in India",
    excerpt:
      "A comprehensive guide to Goods and Services Tax (GST) registration process for businesses operating in India.",
    image: "/placeholder.svg",
    date: "June 20, 2023",
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href="#" className="text-orange-500 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

