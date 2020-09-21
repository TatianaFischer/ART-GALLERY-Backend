import moment from "moment";
import { BaseDatabase } from "./base/BaseDatabase";
import { Image } from "../model/Image";

export class ImageDatabase extends BaseDatabase {
  public async createImg(image: Image): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: image.getId(),
          subtitle: image.getSubtitle(),
          author: image.getAuthor(),
          date: image.getDate(),
          file: image.getfile(),
          collection: image.getCollection(),
        })
        .into(this.tableNames.images);
    } catch (err) {
      throw new Error(err.sqlMessage || err.message);
    }
  }
}
