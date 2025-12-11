import { useState } from "react";
import { Processing } from "../Processing";

export const Quiz = () => {

    // คำถามทั้งหมด
    const Quiz = [
        {
            Q: "เมื่อเพื่อนชวนไปปาร์ตี้ที่มีคนแปลกหน้าเยอะๆ คุณจะ...",
            A: [
                {text: "A. เดินเข้าไปกลางวง แนะนำตัวเสียงดังฟังชัด", type: ["ต้มยำกุ้ง", "เฟรนช์ฟรายส์"]},
                {text: "B. หามุมสงบๆ นั่งมองคน หรือคุยกับเพื่อนสนิทแค่คนเดียว", type: "ดาร์กช็อกโกแลต"},
                "C. คอยเดินเสิร์ฟน้ำ ดูแลเทคแคร์เพื่อนๆ ว่าโอเคไหม",
                "D. นั่งกินเงียบๆ ใครคุยด้วยก็คุย ไหลไปตามน้ำ"
            ]
        },
        {
            Q: "ถ้าต้องทำงานกลุ่ม แล้วงานไม่เดินเลย คุณจะทำยังไง?",
            A: [
                "A. ลุกขึ้นมาสั่งงานเองเลย \"เธอทำอันนี้ เดี๋ยวเราทำอันนั้น!\"",
                "B. พยายามไกล่เกลี่ยบรรยากาศ ให้ทุกคนค่อยๆ ช่วยกันทำ",
                "C. เสนอไอเดียแปลกๆ ใหม่ๆ หรือเล่นมุกให้บรรยากาศไม่เครียด",
                "D. แยกตัวออกมาทำส่วนของตัวเองให้ดีที่สุด เงียบๆ แต่เป๊ะ"
            ]
        },
        {
            Q: "เพื่อนสนิทอกหักโทรมาร้องไห้ตอนตี 2 คุณจะ...",
            A: [
                "A. รีบแต่งตัว ขับรถไปหา พาไปกินของอร่อยเดี๋ยวนี้!",
                "B. รับฟังเงียบๆ ปล่อยให้เขาร้องไห้ และปลอบโยนด้วยคำพูดหวานๆ",
                "C. วิเคราะห์สาเหตุ ว่าทำไมถึงเลิกกัน แล้วให้คำแนะนำเชิงตรรกะ",
                "D. ฟังไปเรื่อยๆ จนกว่าเขาจะหลับ คอยอยู่เป็นเพื่อนไม่วางสาย"
            ]
        },
        {
            Q: "วันหยุดสุดสัปดาห์ที่ว่างทั้งวัน คุณมักจะ..",
            A: [
                "A. วางแผนเที่ยวแน่นเอียด ต้องไปเช็คอินที่ใหม่ๆ",
                "B. นอนโง่ๆ อยู่บนเตียง ดูซีรีส์ยาวๆ ไม่อยากขยับตัว",
                "C. ออกไปคาเฟ่เก๋ๆ ถ่ายรูปสวยๆ อัปสตอรี่รัวๆ",
                "D. อ่านหนังสือ เลี้ยงแมว หรือจัดห้องเงียบๆ คนเดียว"
            ]
        },
        {
            Q: "เวลาเจอเรื่องเครียดๆ วิธีฮีลใจของคุณคือ?",
            A: [
                "A. ระบายอารมณ์ออกมา ตะโกน หรือออกกำลังกายหนักๆ",
                "B. กินของหวาน หรือหาอะไรอร่อยๆ กระแทกปาก",
                "C. เก็บตัวเงียบๆ ทบทวนตัวเองสักพัก เดี๋ยวก็หายเอง",
                "D. นอนหลับ! ตื่นมาค่อยว่ากันใหม่"
            ]
        },
        {
            Q: "ถ้าคุณเป็นอาหาร คุณคิดว่าตัวเอง \"ขาดอะไรไม่ได้\"?",
            A: [
                "A. ขาดความเผ็ดร้อน สีสัน และความตื่นเต้น",
                "B. ขาดความใส่ใจ ความละมุนละไม",
                "C. ขาดความลึกซึ้ง ความจริงแท้ และคุณภาพ",
                "D. ขาดความง่ายๆ สบายๆ อะไรก็ได้"
            ]
        },
        {
            Q: "อยากให้คนอื่นจดจำคุณแบบไหน?",
            A: [
                "A. คนเก่ง ผู้นำที่พึ่งพาได้",
                "B. คนตลก อยู่ด้วยแล้วมีความสุข",
                "C. คนฉลาด ลึกลับ น่าค้นหา",
                "D. คนใจดี อบอุ่นเหมือนบ้าน"
            ]
        }

    ];

    const totalQuestions = Quiz.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center space-y-6">
            {/*Logo  */}
            {/* Progress Bar */}
            <Processing current={currentQuestion} total={totalQuestions} />

            {/* แสดงคำถาม */}
            <div className="pt-4 space-y-8 m-4">
                <h2 className="text-lg md:text-xl font-semibold">{Quiz[currentQuestion].Q}</h2>
                <ul className="space-y-2">
                    {Quiz[currentQuestion].A.map((answer, index) => (
                        <li key={index} className="px-4 py-2 bg-amber-100 rounded-lg hover:bg-amber-200 transition cursor-pointer">
                            {answer}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ปุ่มควบคุม */}
            <div className="flex space-x-4 pt-8">
                <button
                    onClick={handleBack}
                    className="font-bold px-4 py-2 bg-gray-200 rounded-lg transition hover:translate-y-0.5 hover:shadow-lg"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="font-bold px-4 py-2 bg-orange-400 rounded-lg transition hover:translate-y-0.5 hover:shadow-lg"
                >
                    →
                </button>
            </div>
        </section>
    );
};
