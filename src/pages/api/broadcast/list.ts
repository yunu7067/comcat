import type {NextApiRequest, NextApiResponse} from 'next';
import {Boradcast, currentBroadcasts} from '../../../services/Broadcast';

export default function handler(req: NextApiRequest, res: NextApiResponse<Boradcast[]>) {
  res.status(200).json(currentBroadcasts);
}
