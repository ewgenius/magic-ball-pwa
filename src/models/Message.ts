export enum MessageType {
  POSITIVE,
  HEISTANT,
  NEUTRAL,
  NEGATIVE
}

export interface Message {
  text: string
  type: MessageType
}

export const MESSAGES: Message[] = [
  { text: 'It is certain', type: MessageType.POSITIVE },
  { text: 'It is decidedly so', type: MessageType.POSITIVE },
  { text: 'Without a doubt', type: MessageType.POSITIVE },
  { text: 'Yes — definitely', type: MessageType.POSITIVE },
  { text: 'You may rely on it', type: MessageType.POSITIVE },
  { text: 'As I see it, yes', type: MessageType.HEISTANT },
  { text: 'Most likely', type: MessageType.HEISTANT },
  { text: 'Outlook good', type: MessageType.HEISTANT },
  { text: 'Signs point to yes', type: MessageType.HEISTANT },
  { text: 'Yes', type: MessageType.HEISTANT },
  { text: 'Reply hazy, try again', type: MessageType.NEUTRAL },
  { text: 'Ask again later', type: MessageType.NEUTRAL },
  { text: 'Better not tell you now', type: MessageType.NEUTRAL },
  { text: 'Cannot predict now', type: MessageType.NEUTRAL },
  { text: 'Concentrate and ask again', type: MessageType.NEUTRAL },
  { text: 'Don’t count on it', type: MessageType.NEGATIVE },
  { text: 'My reply is no', type: MessageType.NEGATIVE },
  { text: 'My sources say no', type: MessageType.NEGATIVE },
  { text: 'Outlook not so good', type: MessageType.NEGATIVE },
  { text: 'Very doubtful', type: MessageType.NEGATIVE }
]
