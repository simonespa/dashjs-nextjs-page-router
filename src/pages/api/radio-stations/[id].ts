import type { NextApiRequest, NextApiResponse } from 'next';

type OkResponse = {
  id: string;
  title: string;
  description: string;
}

interface ErrorResponse {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OkResponse | ErrorResponse>
) {
  if (req.method === 'GET') {
    res.status(200).json({
      id: "p0hfh58v",
      title: "Going Home on Radio 1",
      description: "Vick and Jamie soundtrack your journey home."
    })
  } else {
    res.status(405).json({
      message: `405 - ${req.method} method not allowed`
    })
  }
}
