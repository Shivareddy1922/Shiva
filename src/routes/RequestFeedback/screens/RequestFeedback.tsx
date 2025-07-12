import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// Template categories data
const templates = [
  {
    id: "personal-growth",
    name: "Personal Growth",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/vector-1.svg",
  },
  {
    id: "emotional-intelligence",
    name: "Emotional Intelligence",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-brain.svg",
  },
  {
    id: "relationship",
    name: "Relationship",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/mdi-users.svg",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/meditation-streamline-flex-gradient.png",
  },
  {
    id: "communication",
    name: "Communication",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/ix-shout.svg",
  },
  {
    id: "values",
    name: "Values",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/solar-shield-check-bold.svg",
  },
  {
    id: "conflicts-resolution",
    name: "Conflicts Resolution",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-compass.svg",
  },
  {
    id: "confidence",
    name: "Confidence",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/noto-sparkles.svg",
  },
  {
    id: "romantic",
    name: "Romantic",
    icon: "https://c.animaapp.com/mcyrevzxBBwRTY/img/love.png",
  },
];

export const RequestFeedback = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleTemplateClick = (templateId: string) => {
    // Template selection handler
    console.log(`Selected template: ${templateId}`);
    // For now, just stay on the same page
  };

  return (
    <div className="bg-white flex flex-col justify-center w-full h-screen">
      <div className="flex-grow overflow-y-auto pb-[79px] bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)]">
        {/* Status Bar */}
        <div className="w-full h-11 bg-skywhite flex-shrink-0">
          <div className="absolute h-4 top-[15px] left-[30px] font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-inkdarkest text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] whitespace-nowrap [font-style:var(--regular-none-medium-font-style)]">
            9:41
          </div>
          <div className="absolute w-[18px] h-2.5 top-5 left-[303px] bg-[url(https://c.animaapp.com/mcyrevzxBBwRTY/img/mobile-signal.svg)] bg-[100%_100%]" />
          <div className="absolute w-[15px] h-[11px] top-[19px] left-[326px] bg-[url(https://c.animaapp.com/mcyrevzxBBwRTY/img/union.svg)] bg-[100%_100%]" />
          <div className="absolute w-[27px] h-[13px] top-[18px] left-[347px] bg-[url(https://c.animaapp.com/mcyrevzxBBwRTY/img/battery.png)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-center relative pt-4 pb-2">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-[21px] p-0 h-auto w-auto hover:bg-gray-100 transition-colors duration-200"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-[31px] h-[15px]" />
          </Button>
          <h1 className="font-title-3 font-[number:var(--title-3-font-weight)] text-inkdarkest text-[length:var(--title-3-font-size)] text-center tracking-[var(--title-3-letter-spacing)] leading-[var(--title-3-line-height)] [font-style:var(--title-3-font-style)]">
            Request Feedback
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="w-[359px] mx-auto mt-4 rounded-[40px_40px_0px_0px] shadow-[0px_0px_35.3px_#00000017] bg-white">
          <Card className="rounded-[40px_40px_0px_0px] border-none shadow-none">
            <CardContent className="p-0 pt-8">
              {/* Template Selection Header */}
              <div className="w-[327px] h-12 mx-auto rounded-[48px] flex items-center justify-center">
                <div className="text-center text-primarybase font-regular-none-medium font-[number:var(--regular-none-medium-font-weight)] text-[length:var(--regular-none-medium-font-size)] tracking-[var(--regular-none-medium-letter-spacing)] leading-[var(--regular-none-medium-line-height)] [font-style:var(--regular-none-medium-font-style)]">
                  Choose a Template
                </div>
              </div>

              {/* Selected Template */}
              <div className="w-[308px] h-[63px] mt-6 mx-auto bg-blue-100 rounded-[10px] shadow-[0px_6px_10px_#00000012] flex items-center">
                <div className="w-[63px] h-[63px] bg-[#8b5cf645] rounded-[10px_0px_0px_10px] flex items-center justify-center">
                  <img className="w-6 h-6" alt="Icon favourite" src="https://c.animaapp.com/mcyqfprtGIr7Ia/img/icon-favourite.svg" />
                </div>
                <div className="ml-[14px] font-semibold text-inkdarkest text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica]">
                  Personal Growth
                </div>
              </div>

              {/* Template Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 mx-auto w-[320px] pb-8">
                {templates.map((template) => (
                  <div 
                    key={template.id} 
                    className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => handleTemplateClick(template.id)}
                  >
                    <Card className="w-[89px] h-[89px] bg-blue-100 rounded-[10px] border border-solid border-[#e1e1e1] flex items-center justify-center">
                      <CardContent className="p-0 flex items-center justify-center">
                        <img
                          className="w-[53px] h-[53px]"
                          alt={template.name}
                          src={template.icon}
                        />
                      </CardContent>
                    </Card>
                    <div className="mt-2 text-center text-black text-sm [font-family:'Inter',Helvetica] font-normal">
                      {template.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};
