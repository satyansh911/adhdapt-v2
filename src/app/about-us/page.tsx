"use client";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      {/* Top Navigation */}
      <div className="w-full max-w-6xl flex justify-between items-center py-6 text-[#ffd12d] text-sm uppercase tracking-widest">
        <span className="font-bold">Logo</span>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-6xl flex flex-col md:flex-row gap-12 mt-4">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-4 text-black text-base font-semibold mt-2 w-40">
          <a href="#about" className="hover:underline">
            About us.
          </a>
          <a href="#team" className="hover:underline">
            Our team.
          </a>
          <a href="#press" className="hover:underline">
            Press.
          </a>
        </aside>

        {/* About Section */}
        <section className="flex-1">
          <h1
            id="about"
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#ffd12d]"
          >
            ABOUT US.
          </h1>
          <p className="text-lg md:text-xl text-black mb-6 max-w-2xl">
            ADHDapt is a passionate team dedicated to empowering individuals
            with ADHD. Founded in 2024, we blend science-backed strategies with
            gamified tools to make focus and growth fun, accessible, and
            sustainable.
          </p>
          <p className="text-md text-black mb-8 max-w-2xl">
            Our journey began when a group of neurodiverse creators realized the
            need for a supportive, engaging platform for ADHD minds. Today,
            ADHDapt is a thriving community, helping thousands unlock their
            potential every day.
          </p>
          {/* Wide Team Image */}
          <div className="w-full rounded-xl overflow-hidden mb-10">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
              alt="Team working"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>
      </main>

      {/* Quote and Image Row */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <blockquote className="italic text-2xl font-semibold text-black mb-2">
            “Our work makes sense only if it is a faithful witness of its time.”
          </blockquote>
          <span className="text-[#ffd12d]/70 text-base">
            Alex Neuro, Founder
          </span>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
            alt="Team member at work"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Team Section */}
      <section
        id="team"
        className="w-full max-w-6xl grid md:grid-cols-2 gap-12 mb-16"
      >
        {/* Team Photos */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Team member"
            className="w-full h-48 object-cover rounded-xl bg-[#ffd12d]/10"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Team member"
            className="w-full h-48 object-cover rounded-xl bg-[#ffd12d]/10"
          />
          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="Team member"
            className="w-full h-48 object-cover rounded-xl bg-[#ffd12d]/10"
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Team member"
            className="w-full h-48 object-cover rounded-xl bg-[#ffd12d]/10"
          />
        </div>
        {/* Team Info */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-[#ffd12d]">
            THE TEAM.
          </h2>
          <p className="text-md text-black mb-6">
            Our diverse team brings together expertise in neuroscience, design,
            and technology. We believe in the power of collaboration and
            creativity to build tools that truly make a difference.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-3xl font-bold text-[#ffd12d]">600+</div>
              <div className="text-sm text-black">Modules completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffd12d]">700+</div>
              <div className="text-sm text-black">Active users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffd12d]">1.2K</div>
              <div className="text-sm text-black">Community posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ffd12d]">110</div>
              <div className="text-sm text-black">Expert sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center border-t border-black pt-6 pb-8 mt-8 text-black text-sm gap-2">
        <div>
          &copy; {new Date().getFullYear()} ADHDapt. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            instagram.
          </a>
          <a href="#" className="hover:underline">
            facebook.
          </a>
          <a href="#" className="hover:underline">
            twitter.
          </a>
        </div>
      </footer>
    </div>
  );
}
