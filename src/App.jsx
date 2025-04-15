import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CeeLayout from "./components/cee/CeeLayout.jsx";
import CeeExamLayout from "./components/cee/exam/CeeExamLayout.jsx";
import CeeExamVideos from "./components/cee/exam/CeeExamVideos.jsx";
import CeeExamReading from "./components/cee/exam/CeeExamReading.jsx";
import CeeExamMCQs from "./components/cee/exam/CeeExamMCQs.jsx";
import CeeExamFillBlanks from "./components/cee/exam/CeeExamFillBlanks.jsx";
import CeeExamMCQPaper from "./components/cee/exam/CeeExamMCQPaper.jsx";
import CeeExamFillBlanksPaper from "./components/cee/exam/CeeExamFillBlanksPaper.jsx";
import ComingSoon from "./components/ComingSoon.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cee" replace />} />

                <Route path="/cee" element={<CeeLayout/>}>
                    <Route path="exam" element={<CeeExamLayout/>}>
                        <Route index element={<CeeExamVideos/>}/>
                        <Route path="videos" element={<CeeExamVideos/>}/>
                        <Route path="reading" element={<CeeExamReading/>}/>
                        <Route path="mcqs" element={<CeeExamMCQs/>}>
                            <Route path=":paperId" element={<CeeExamMCQPaper/>} />
                        </Route>
                        <Route path="fill-in-the-blanks" element={<CeeExamFillBlanks/>}>
                            <Route path=":paperId" element={<CeeExamFillBlanksPaper/>} />
                        </Route>
                    </Route>
                    <Route path="interview" element={<ComingSoon />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
