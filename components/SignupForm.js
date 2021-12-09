export const SignupForm = () => {
  return (
    <section className="footer-cta text-center mb-4" >
      <div className="inner p-4" style={{ backgroundColor: "#4338CA" }}>
        <form className="footer-cta-button" action="https://formsubmit.co/sunnyashiin@gmail.com" method="POST">
          <p className="text-white m-0 mb-2">🚀 I'm building a product a month in public</p>

          <div className="flex"> <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 mr-4 w-full" id="username" type="email"
            name="email" placeholder="Enter your email address" />



            <button type="submit" class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded h-10 w-2/5 hidden md:block">
              Subscribe →
            </button>

            <button type="submit" class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded h-10 w-1/5 block md:hidden">
              →
            </button>

          </div>

        </form>

      </div>
    </section>
  )
}

export default SignupForm