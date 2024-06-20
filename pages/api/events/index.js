import { prisma } from '../../../lib/prisma';

export default async function handle(req, res) {
  if (req.method === 'GET') {
    // イベントの一覧を取得
    const events = await prisma.event.findMany();
    res.json(events);
  } else if (req.method === 'POST') {
    // 新しいイベントを作成
    const { title, description, date } = req.body;
    const event = await prisma.event.create({
      data: { title, description, date: new Date(date) },
    });
    res.json(event);
  } else {
    res.status(405).end(); // メソッドが許可されていない場合の応答
  }
}
