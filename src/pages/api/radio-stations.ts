import type { NextApiRequest, NextApiResponse } from 'next';

type OkResponse = {
  id: string;
  name: string;
  description: string;
}

interface ErrorResponse {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OkResponse[] | ErrorResponse>
) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 'bbc_radio_one',
        name: 'BBC Radio 1',
        description: 'The biggest new pop & all day vibes.'
      },
      {
        id: 'bbc_1xtra',
        name: 'BBC Radio 1Xtra',
        description: 'Amplifying black music & culture.'
      },
      {
        id: 'bbc_radio_two',
        name: 'BBC Radio 2',
        description: 'Lift your day with the best tunes from your favourite DJs.'
      },
      {
        id: 'bbc_radio_three',
        name: 'BBC Radio 3',
        description: 'The best classical music and arts.'
      }
    ])
  } else {
    res.status(405).json({
      message: `405 - ${req.method} method not allowed`
    })
  }
}
