import { VercelRequest, VercelResponse } from '@vercel/node';
import { exec } from 'child_process';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { language, code } = req.body;

    if (!language || !code) {
      return res.status(400).json({ status: 'error', error: 'Language and code are required' });
    }

    let command: string;

    switch (language) {
      case 'Python':
        command = `python3 -c "${code}"`;
        break;
      case 'Go':
        command = `go run -e "${code}"`;
        break;
      default:
        return res.status(400).json({ status: 'error', error: 'Unsupported language' });
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ status: 'error', error: error.message });
      }

      if (stderr) {
        return res.status(500).json({ status: 'error', error: stderr });
      }

      return res.status(200).json({ status: 'success', output: stdout });
    });
  } else {
    res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }
}
