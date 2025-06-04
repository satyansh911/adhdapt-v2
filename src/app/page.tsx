import styles from './index.module.css';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <b className={styles.adhdaptTrackUnderstandThrContainer}>
        <p className={styles.adhdapt}>ADHDapt</p>
        <p className={styles.trackUnderstandThrive}>Track. Understand. Thrive.</p>
      </b>
      <div className={styles.adhdaptIsYour}>ADHDapt is your personal space to manage moods, tasks, reflections, and motivation — built for the way your brain works. Whether you're just starting out or trying to stay consistent, we’re here to guide you.</div>
      <a href="/sign-up">
        <button className="relative right-[540px] -top-[110px] px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Start Your Journey
        </button>
      </a>
    </section>
    
  );
}
