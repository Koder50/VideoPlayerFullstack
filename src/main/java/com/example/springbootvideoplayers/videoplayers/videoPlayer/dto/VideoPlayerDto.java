package com.example.springbootvideoplayers.videoplayers.videoPlayer.dto;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VideoPlayerDto {

    private UUID id;

    @NotNull(message = "Url Name is required")
    private String urlName;
    @NotNull(message = "Name is required")
    @Column(name = "name", columnDefinition = "VARCHAR(300)", nullable = false)
    private String nameAbbr;
    private String createdAt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z")
            .format(new Date());
}
