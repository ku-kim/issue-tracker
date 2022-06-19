package dev.kukim.issues.user.auth.property;

import javax.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

@Component
@Getter @Setter
@Validated
@ConfigurationProperties("oauth.github")
public class GithubProperty {

	@NotEmpty
	private String accessTokenUri;

	@NotEmpty
	private String userInfoUri;

	@NotEmpty
	private String clientId;

	@NotEmpty
	private String clientSecret;
}
