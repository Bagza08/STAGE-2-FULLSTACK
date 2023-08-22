import { RelationId, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Thread } from "../entities/Thread";
import { Request, Response } from "express";

class ThreadServices {
  private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const thread = await this.threadRepository.find({ relations: ["user"] });
      return res.status(200).json(thread);
    } catch (err) {
      return res.status(500).json({ error: "err while" });
    }
  }
  async findOne(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },
        relations: ["user"],
      });
      return res.status(200).json(thread);
    } catch (err) {
      return res.status(500).json({ error: "detail gagal" });
    }
  }
  async create(req: Request, res: Response): Promise<Response> {
    const { content, image } = req.body;

    try {
      const thread = await this.threadRepository.create({
        content,
        image: res.locals.filename,
      });

      const createThread = await this.threadRepository.save(thread);
      return res.status(200).json(createThread);
    } catch (err) {
      return res.status(500).json({ error: "akun gagal di tambah" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },
      });

      await this.threadRepository.remove(thread);
      return res.status(200).json("berhasill di hapus");
    } catch (err) {
      return res.status(500).json({ error: "gagal menhapus" });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const { content, image } = req.body;

    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },
      });

      thread.content = content;
      thread.image = image;

      const updateThread = this.threadRepository.save(thread);

      return res.status(200).json(updateThread);
    } catch (err) {
      return res.status(500).json({ error: "gagal update" });
    }
  }
}

export default new ThreadServices();
