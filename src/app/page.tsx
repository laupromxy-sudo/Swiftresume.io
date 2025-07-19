import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import Features from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <QuestionsAndAnswers />
      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold">What is a resume builder?</h3>
          <p>A resume builder is an online tool that helps you create a professional resume quickly and easily, often with templates and formatting best practices built in.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Is SwiftResume.io really free?</h3>
          <p>Yes! SwiftResume.io is completely free to use, with no sign up required.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Can I import my existing resume?</h3>
          <p>Yes, you can import your existing resume PDF and update it with a modern design in seconds.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Is my data private?</h3>
          <p>Absolutely. All your data stays in your browser and is never sent to a server.</p>
        </div>
      </section>
      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
        <blockquote className="border-l-4 pl-4 italic mb-4">“SwiftResume.io’s auto format feature is a great help to ensure consistent format.”<br /><span className="font-semibold">– Ms. Spiegel, Educator</span></blockquote>
        <blockquote className="border-l-4 pl-4 italic mb-4">“I was invited to interview at top tech companies thanks to its slick yet professional resume design.”<br /><span className="font-semibold">– Santi, Software Engineer</span></blockquote>
        <blockquote className="border-l-4 pl-4 italic">“Creating a professional resume on SwiftResume.io is so smooth and easy! It saves me so much time and headache.”<br /><span className="font-semibold">– Vivian, College Student</span></blockquote>
      </section>
      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Support SwiftResume.io</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Standard AdSense ad unit */}
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9767462267523818"
            data-ad-slot="9978320929"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
        <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
      </section>
      {/* AMP Ad Example */}
      <section className="mt-8 max-w-2xl mx-auto flex justify-center">
        <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-9767462267523818"
          data-ad-slot="9978320929"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad>
      </section>
      <section className="mt-8 max-w-2xl mx-auto flex justify-center">
        <a href="https://coff.ee/swiftresumeio" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: 60, width: 217 }} />
        </a>
      </section>
    </main>
  );
}
