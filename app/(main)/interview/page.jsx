import { getAssessments } from "@/actions/interview";
import StatsCards from "./_component/stat_cards";
import PerformanceChart from "./_component/performance_chart";
import QuizResult from "./_component/quiz_result";
import Link from "next/link";


export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    
    <div>
<div className="flex items-center justify-center py-10">
<Link href="/interview/mock">
          <button className="  px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Start Mock Interview
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
      <StatsCards assessments={assessments} />
      <PerformanceChart assessments={assessments} />
      <QuizResult assessments={assessments} hideStartNew={true} />
      </div>
    </div>
  );
}