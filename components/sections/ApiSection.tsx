import React from "react";
import { RetroWindow } from "@/components/ui/RetroWindow";
import { PixelButton } from "@/components/ui/PixelButton";

export function ApiSection() {
  return (
    <section className="py-24 px-6 bg-white border-b border-black">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-6">
            Tavus API platform
          </h2>
          <p className="font-sans text-xl text-tavus-muted mb-8">
            Build conversational AI video experiences in minutes. Our APIs give developers out-of-the-box building blocks for embeddable real-time video, voice, and vision.
          </p>
          <PixelButton>GET API KEYS</PixelButton>
        </div>

        <div className="relative">
           {/* Code Editor Window */}
           <RetroWindow title="curl_request.sh" className="bg-tavus-code-bg text-white shadow-2xl">
              <div className="p-6 font-mono text-xs md:text-sm overflow-x-auto">
                 <div className="text-green-400">
                    <span className="text-purple-400">curl</span> --request POST \<br/>
                    &nbsp;&nbsp;--url https://tavusapi.com/v2/conversations \<br/>
                    &nbsp;&nbsp;--header <span className="text-yellow-300">'Content-Type: application/json'</span> \<br/>
                    &nbsp;&nbsp;--header <span className="text-yellow-300">'x-api-key: &lt;api-key&gt;'</span> \<br/>
                    &nbsp;&nbsp;--data <span className="text-yellow-300">'{`{`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;"replica_id": "rfe12d8b9597",
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;"persona_id": "pdced222244b"
                    <br/>{`}`}'</span>
                 </div>
              </div>
           </RetroWindow>
           
           {/* Response Window Overlay */}
           <RetroWindow 
              title="response.json" 
              className="absolute -bottom-12 -right-8 w-3/4 bg-tavus-code-bg text-white shadow-retro z-20 hidden md:block"
           >
              <div className="p-4 font-mono text-xs">
                 <div className="text-blue-300">
                    {`{`}
                    <br/>&nbsp;&nbsp;"status": "active",
                    <br/>&nbsp;&nbsp;"conversation_url": "https://tavus.io/c/..."
                    <br/>{`}`}
                 </div>
              </div>
           </RetroWindow>
        </div>
      </div>
    </section>
  );
}
