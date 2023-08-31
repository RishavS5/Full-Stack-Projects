package stream;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class StreamMethods {

	public static void main(String[] args) throws IOException {
		String Contents = new String(Files.readAllBytes(Paths.get("C:\\Users\\Asus\\Desktop\\Disco 82.txt")),
				StandardCharsets.UTF_8);
		List<String> words = Arrays.asList(contents.split("\\PL+"));

	}
}
