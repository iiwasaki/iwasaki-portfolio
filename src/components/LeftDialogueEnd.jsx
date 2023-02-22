import SpeechLeft from "./icons/SpeechLeft"

export default function LeftDialogueEnd({ text, offset_t, offset_l }) {
    let top_offset_val = ""
    if (offset_t === 1) {
        top_offset_val = "-top-3"
    }
    else if (offset_t === 2) {
        top_offset_val = "-top-6"
    }

    return (
        <div className={`
                        before:block
                        before:absolute
                        before:rounded-full
                        before:top-0
                        before:-bottom-1
                        before:left-0
                        before:-right-1.5
                        before:-z-10
                        before:bg-orange-700
                        relative
                        border-2
                        rounded-full
                        bg-white
                        border-orange-600
                        px-8
                        py-4
                        ${offset_l}
                        ${top_offset_val}`
        }>
            <p>{text}</p>
            <SpeechLeft className="absolute w-9 h-9 top-full right-[20%] stroke-2 text-orange-700 fill-white" />
        </div>
    )
}