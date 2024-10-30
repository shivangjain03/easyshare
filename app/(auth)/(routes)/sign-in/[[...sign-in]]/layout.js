import { ClerkProvider, SignIn, SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";

export default function RootLayout() {
  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="EasyShare"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>
      
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <img className='h-8' src="/logo1.png" alt="EasyShare" />
              </a>
      
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Welcome to EasyShare✨
              </h1>
      
              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Effortlessly share files and collaborate in real-time. With EasyShare, sharing is secure, fast, and simple—connect and share with confidence.


              </p>
      
              <ClerkProvider>
                <div>
                  <main>
                    <SignedOut>
                      <SignIn routing="hash" forceRedirectUrl="/upload"/>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                      {/* {children} */}
                    </SignedIn>
                  </main>
                </div>
              </ClerkProvider>
            </div>
          </main>
        </div>
      </section>
    );










  //   <ClerkProvider>
  //     <div>
  //       <main>
  //         <SignedOut>
  //           <SignIn routing="hash" />
  //         </SignedOut>
  //         <SignedIn>
  //           <UserButton />
  //           {children}
  //         </SignedIn>
  //       </main>
  //     </div>
  //   </ClerkProvider>
  // );
}