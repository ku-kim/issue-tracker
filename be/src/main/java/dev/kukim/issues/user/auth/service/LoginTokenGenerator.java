package dev.kukim.issues.user.auth.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.time.Instant;
import java.util.Map;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class LoginTokenGenerator {

	private static final long HALF_HOUR = 30L;
	private static final int ONE_MINUTE = 60;
	@Value("${jwt.secret}")
	private String jwtSecret;

	public String accessToken(Long userId) {
		return loginToken(userId,
			Date.from(Instant.now().plusSeconds(ONE_MINUTE * HALF_HOUR)));
	}

	private String loginToken(Long userId, Date plusMinutes) {
		SecretKey secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));

		return Jwts.builder()
			.setHeader(Map.of(
				"typ", "JWT",
				"alg", "HS256",
				"regDate", System.currentTimeMillis()))
			.setClaims(Map.of("userId", userId))
			.setExpiration(plusMinutes)
			.signWith(secretKey, SignatureAlgorithm.HS256)
			.compact();
	}
}
