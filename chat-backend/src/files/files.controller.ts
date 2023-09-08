import {
  Controller,
  Get,
  Param,
  NotFoundException,
  StreamableFile,
} from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";

@Controller()
export class FilesController {
  @Get(":file([^/]+/[^/]+)")
  handleFile(@Param("file") filepath: string) {
    try {
      const file = createReadStream(join(process.cwd(), "public", filepath));
      return new StreamableFile(file);
    } catch (error) {
      throw new NotFoundException(`File by path ${filepath} not found`);
    }
  }
}
