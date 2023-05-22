import mongoose ,  { Schema ,model,models} from 'mongoose';

const PromptSchema = new Shema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',

    },
    prompt : {
        type: String ,
        required: [true,'Prompt is required.']
    },
    tag:{
        type: String,
        required: [true,'Tag is required.']
    }
});

const Prompt = models.Prompt || model('Prompt',PromptSchema)

export default Prompt;