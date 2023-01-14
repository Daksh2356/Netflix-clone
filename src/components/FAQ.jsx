import React from "react";
import { Disclosure } from "@headlessui/react";
import "../css/FAQ.css";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Netflix?",
      desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹199 to ₹799 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      desc: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <>
      <div className="faq_area">
        <h1 className="heading">Frequently Asked Questions</h1> <br />
        <div>
          <Disclosure as="span">
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>What is Netflix?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  <span>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more - on thousands of internet-connected devices. You can
                    watch as much as you want, whenever you want, without a
                    single ad - all for one low monthly price. There's always
                    something new to discover, and new TV shows and movies are
                    added every week!
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>How much does Netflix cost?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹199 to ₹799 a month. No extra costs, no contracts.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>Where can I watch?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  <span>
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles. You can also download your
                    favorite shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an
                    internet connection. Take Netflix with you anywhere.
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>How do I cancel?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>What can I watch on Netflix?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  <span>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="question">
                  <span>Is Netflix good for kids?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="answer">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <br />
        <br />
        <p className="desc">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <br />
        <nobr>
          <input
            type="text"
            className="mail_box"
            placeholder="Email address"
            id="input_box"
          />
          <button onSubmit={window.location.reload} className="get_btn">
            Get Started
          </button>
        </nobr>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default FAQ;
