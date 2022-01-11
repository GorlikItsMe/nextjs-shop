-- AlterTable
ALTER TABLE `products` ADD COLUMN `imageLink` VARCHAR(191) NOT NULL DEFAULT '/images/no_image.jpg',
    MODIFY `desc` VARCHAR(500) NOT NULL;
