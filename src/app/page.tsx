import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col">
      <div className="max-w-4xl mx-auto flex-1">
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Meet Our Ai Teachers</h1>
          </div>

          {/* Buttons container with gap */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sintu009/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors duration-300"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.854 0-2.139 1.445-2.139 2.939v5.669H9.353V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.268 2.368 4.268 5.451v6.292zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.885 20.452H3.788V9h3.097v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sintu009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
            >
              {/* GitHub Icon */}
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hitesh Chaudhary */}
          <Link href="/hitesh-chaudhary">
            <Card className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 bg-white/90 dark:bg-slate-800/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <img
                    src="/hiteshsir.jpeg"
                    alt="Hitesh Chaudhary"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-foreground">
                    Hitesh Chaudhary
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Full stack Developer & Educator
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                      Javascript
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">
                      React Js
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-xs font-medium">
                      DevOps
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about teaching web development and helping developers
                grow their skills through practical projects and real-world
                applications.
              </p>
            </Card>
          </Link>

          {/* Piyush Garg */}
          <Link href="/piyush-garg">
            <Card className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 bg-white/90 dark:bg-slate-800/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <img
                    src="/piysuh.jpeg"
                    alt="Piyush"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-foreground">Piyush</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    Software Engineer & Mentor
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-medium">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-md text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-md text-xs font-medium">
                      DevOps
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated to creating innovative solutions and mentoring the
                next generation of developers with hands-on experience and
                industry insights.
              </p>
            </Card>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 text-center py-4 text-sm text-gray-600 fixed bottom-0 w-full bg-transparent">
        © {new Date().getFullYear()} Kumar Sintu. All rights reserved.
      </footer>
    </div>
  );
};

export default page;
