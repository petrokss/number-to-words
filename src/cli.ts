import { numbersToWords } from "./number-to-words";

try {
  const argv = process.argv;
  const result = numbersToWords(Number(argv[2]));
  process.stdout.write(result + "\n\n");
  process.exit(0);
} catch (error) {
  let message = "Unhandled error";
  if (error instanceof Error && error.message) {
    message = error.message;
  }
  process.stdout.write(`Error: ${message}\n`);
  process.exit(1);
}
