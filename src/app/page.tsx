import QuestionnaireGenerator from '@/components/QuestionnaireGenerator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 ">
      <QuestionnaireGenerator />
    </main>
  );
}